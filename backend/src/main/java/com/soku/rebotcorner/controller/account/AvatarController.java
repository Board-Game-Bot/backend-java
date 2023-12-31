package com.soku.rebotcorner.controller.account;

import cn.hutool.json.JSONObject;
import com.soku.rebotcorner.service.account.AvatarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;

@RestController
public class AvatarController {
  @Autowired
  private AvatarService avatarService;

  @PostMapping("/api/account/avatar")
  public JSONObject updateAvatar(@RequestPart("cropped_image") MultipartFile multipartFile) throws FileNotFoundException {
    return avatarService.updateAvatar(multipartFile);
  }
}
