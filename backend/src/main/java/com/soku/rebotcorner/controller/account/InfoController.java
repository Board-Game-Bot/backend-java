package com.soku.rebotcorner.controller.account;

import cn.hutool.json.JSONObject;
import com.soku.rebotcorner.service.account.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {
  @Autowired
  private InfoService infoService;

  @GetMapping("/api/account/getInfo")
  public JSONObject getInfo() {
    return infoService.getInfo();
  }

  @GetMapping("/api/account/info")
  public JSONObject getInfoById(@RequestParam("id") Integer id) {
    return infoService.getInfoById(id);
  }
}
