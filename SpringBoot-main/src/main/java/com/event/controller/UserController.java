package com.event.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.dto.UserDto;
import com.event.entity.UserEntity;
import com.event.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService us;

	@GetMapping("/getalldata")
	public List<UserDto> getAll() {
		return us.getAll();
	}

	@PostMapping("/sallalldata")
	public String saveAll(@RequestBody UserDto ud) {

		if (us.saveAll(ud) != null) {
			return "success";
		}

		return "failed";
	}

	@GetMapping("/userlogin/{username}/{password}")
	public Optional<UserEntity> loginCheck(@PathVariable String username, @PathVariable String password) {
		Map<String, Object> res = new HashMap<>();

		  return us.loginCheck(username, password);
	}

	

}
