package com.event.service;

import java.util.List;

import com.event.dto.BookingDto;
import com.event.entity.BookingEntity;

public interface BookingService {

	public  BookingEntity  saveData(BookingDto bd);

	public List<BookingEntity> getAllData();

}
