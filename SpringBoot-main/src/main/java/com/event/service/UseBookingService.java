package com.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.dto.BookingDto;
import com.event.entity.BookingEntity;
import com.event.repository.BookingRepository;
import com.event.repository.EventImgRepository;
import com.event.repository.UserRepository;

@Service
public class UseBookingService implements BookingService {

	@Autowired
	private BookingRepository br;

	@Autowired
	private EventImgRepository eir;
	
	@Autowired
	private UserRepository ur;

	@Override
	public BookingEntity saveData(BookingDto bd) {

		BookingEntity be = new BookingEntity();
		be.setBookingDate(bd.getBookingDate());
		be.setId(bd.getId());
		be.setEventImgEntity(eir.findById(bd.getEventId()).get());
		be.setUserEntity(ur.findById(bd.getUserId()).get());

		return br.save(be);
	}

	@Override
	public List<BookingEntity> getAllData() {

		return br.findAll();
	}

}
