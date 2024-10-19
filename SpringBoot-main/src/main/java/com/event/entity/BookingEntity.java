package com.event.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;



@Entity
@Table(name = "booking")
public class BookingEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "bookingDate")
	private String bookingDate;

	@ManyToOne(targetEntity = EventImgEntity.class)
	@JoinColumn(name = "eventId", referencedColumnName = "id")
	private EventImgEntity eventImgEntity;

	@ManyToOne(targetEntity = UserEntity.class)
	@JoinColumn(name = "userId", referencedColumnName = "id")
	private UserEntity userEntity;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	public EventImgEntity getEventImgEntity() {
		return eventImgEntity;
	}

	public void setEventImgEntity(EventImgEntity eventImgEntity) {
		this.eventImgEntity = eventImgEntity;
	}

	public UserEntity getUserEntity() {
		return userEntity;
	}

	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
	}

	public BookingEntity(long id, String bookingDate, EventImgEntity eventImgEntity, UserEntity userEntity) {
		super();
		this.id = id;
		this.bookingDate = bookingDate;
		this.eventImgEntity = eventImgEntity;
		this.userEntity = userEntity;
	}

	public BookingEntity() {
		super();
		
	}
	

}
