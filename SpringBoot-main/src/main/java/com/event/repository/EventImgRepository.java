package com.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.entity.EventImgEntity;

@Repository
public interface EventImgRepository extends JpaRepository<EventImgEntity, Long> {

}
