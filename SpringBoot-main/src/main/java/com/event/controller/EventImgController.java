package com.event.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.event.entity.EventImgEntity;
import com.event.service.UseEventService;

@RestController
@RequestMapping("/event")
public class EventImgController {

	@Autowired
	private UseEventService ues;

	@PostMapping("/upload")
	public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file,
			@ModelAttribute EventImgEntity ee) {
		if (file.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is empty.");
		}

		try {
			ues.saveImage(file, ee);
			return ResponseEntity.status(HttpStatus.OK)
					.body("Image uploaded successfully: " + file.getOriginalFilename());
		} catch (IOException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Image upload failed: " + e.getMessage());
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error processing request: " + e.getMessage());
		}
	}

	@PutMapping("/updata/{id}")
	public ResponseEntity<EventImgEntity> updataData(@PathVariable long id, @RequestParam("image") MultipartFile file,
			@ModelAttribute EventImgEntity ee) {
		try {
			EventImgEntity updatedEntity = ues.updateData(id, file, ee);
			return ResponseEntity.ok(updatedEntity);
		} catch (IOException e) {
			return ResponseEntity.status(500).body(null);
		} catch (RuntimeException e) {
			return ResponseEntity.notFound().build();
		}

	}

	@GetMapping("/images")
	public ResponseEntity<List<EventImgEntity>> getAllImages() {
		try {
			List<EventImgEntity> images = ues.getAllImages();
			if (images.isEmpty()) {
				return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			}
			return ResponseEntity.ok(images);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@DeleteMapping("/delete/{id}")
	public String deleteData(@PathVariable long id) {
		return ues.deleteData(id);

	}

}
