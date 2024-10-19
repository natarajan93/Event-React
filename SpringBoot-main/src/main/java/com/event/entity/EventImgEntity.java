package com.event.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "eventImg")
public class EventImgEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "eventName")
	private String eventName;

	@Column(name = "eventPrice")
	private double eventPrice;

	@Column(name = "eventDescription")
	private String eventDescription;

	@Lob
	private byte[] imageData;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public double getEventPrice() {
		return eventPrice;
	}

	public void setEventPrice(double eventPrice) {
		this.eventPrice = eventPrice;
	}

	public String getEventDescription() {
		return eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	public byte[] getImageData() {
		return imageData;
	}

	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}

	public EventImgEntity() {
		super();

	}


	public EventImgEntity(long id, String eventName, double eventPrice, String eventDescription, byte[] imageData) {
		super();
		this.id = id;
		this.eventName = eventName;
		this.eventPrice = eventPrice;
		this.eventDescription = eventDescription;
		this.imageData = imageData;
	}

}
