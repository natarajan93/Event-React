package com.event.service;

import java.util.List;
import java.util.Optional;

import com.event.dto.UserDto;
import com.event.entity.UserEntity;

public interface UserService {
	
	
	public UserEntity saveAll(UserDto ud);
	
	public List<UserDto> getAll();

	public  Optional<UserEntity> loginCheck(String username, String password);

}
