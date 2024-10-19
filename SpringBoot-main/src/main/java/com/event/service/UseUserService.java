package com.event.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.controller.UserController;
import com.event.dto.UserDto;
import com.event.entity.UserEntity;
import com.event.repository.UserRepository;

@Service
public class UseUserService implements UserService {

	@Autowired
	private UserRepository ur;

	@Override
	public UserEntity saveAll(UserDto ud) {
		UserEntity ue = new UserEntity();
		ue.setId(ud.getId());
		ue.setUserName(ud.getUserName());
		ue.setGender(ud.getGender());
		ue.setMobileNumber(ud.getMobileNumber());
		ue.setEmail(ud.getEmail());
		ue.setPassword(ud.getPassword());
		return ur.save(ue);
	}

	@Override
	public List<UserDto> getAll() {
		List<UserEntity> users = ur.findAll();

		return users.stream().map(item -> {
			UserDto ud = new UserDto();
			ud.setId(item.getId());
			ud.setUserName(item.getUserName());
			ud.setGender(item.getGender());
			ud.setMobileNumber(item.getMobileNumber());
			ud.setEmail(item.getEmail());
			return ud;
		}).collect(Collectors.toList());

	}

	
	@Override
	public Optional<UserEntity> loginCheck(String username, String password) {
		List<UserEntity> login = ur.findAll();

		for (UserEntity u : login) {
			if (u.getUserName().equals(username) && u.getPassword().equals(password)) {
				
			return	ur.findById(u.getId());
			}

		}

		return Optional.empty();
	}

}
