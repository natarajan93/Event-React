package com.event.dto;

public class BookingDto {

	private long id;
	private String bookingDate;
	private long eventId;
	private long userId;
	
	
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public long getEventId() {
		return eventId;
	}
	public void setEventId(long eventId) {
		this.eventId = eventId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public BookingDto(long id,String bookingDate, long eventId, long userId) {
		super();
		this.bookingDate = bookingDate;
		this.eventId = eventId;
		this.userId = userId;
		this.id=id;
	}
	public BookingDto() {
		super();
	}

}
