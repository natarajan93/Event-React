package com.event.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.event.dto.BookingDto;
import com.event.entity.BookingEntity;
import com.event.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {

	@Autowired
	private BookingService bs;

	@PostMapping("/savebooking")
	public Map<String, Object> saveBooking(@RequestBody BookingDto bd) {
		Map<String, Object> res = new HashMap<>();
		if (bs.saveData(bd) != null) {
			
			res.put("status", HttpStatus.OK);
			res.put("message", "success");
			res.put("timestamp", new Date());
			return res;
		}
		res.put("status", HttpStatus.BAD_REQUEST);
		res.put("message", "failed");
		res.put("timestamp", new Date());
		return res;

	}

	@GetMapping("/getall")

	public List<BookingEntity> getAllData() {
		return bs.getAllData();
	}

}
