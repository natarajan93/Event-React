package com.event.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.event.entity.EventImgEntity;

import com.event.repository.EventImgRepository;

@Service
public class UseEventService {

	@Autowired
	private EventImgRepository eir;

	public EventImgEntity saveImage(MultipartFile file, EventImgEntity ee) throws IOException {
		byte[] imageData = file.getBytes();
		ee.setImageData(imageData);

		return eir.save(ee);
	}

	public List<EventImgEntity> getAllImages() {
		return eir.findAll();
	}

	public String deleteData(long id) {
		try {
			eir.deleteById(id);
			return "Record deleted successfully";
		} catch (Exception e) {
			return "Error deleting record: " + e.getMessage();
		}
	}

	public EventImgEntity updateData(long id, MultipartFile file, EventImgEntity ee) throws IOException{
		Optional<EventImgEntity> oee= eir.findById(id);
		 if (oee.isPresent()) {
	            EventImgEntity existingEntity = oee.get();
	            byte[] imageData = file.getBytes();
	            existingEntity.setImageData(imageData);
	            existingEntity.setEventName(ee.getEventName());
	            existingEntity.setEventPrice(ee.getEventPrice());
	            existingEntity.setEventDescription(ee.getEventDescription());
	            return eir.save(existingEntity); 
	        } else {
	            throw new RuntimeException("EventImgEntity not found with id: " + id);
	        }
	}
}
