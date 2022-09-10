package com.ucsc.vwsbackend.repository.ProjectDao;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.NewProjectDetail;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.entities.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@Repository
public class ProjectJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<ProjectDetail> getOngoingProjects() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT *  " +
                "FROM project as p " +
                "INNER JOIN project_coordinator as pc ON p.coordinator_id = pc.coordinator_id " +
                "INNER JOIN user as u ON u.id = pc.id " +
                "and p.status=1";

        List<ProjectDetail> projectDetail = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ProjectDetail>(ProjectDetail.class));
        return projectDetail;
    }

    public List<ProjectDetail> getProposedProjects() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT *  " +
                "FROM project as p " +
                "INNER JOIN volunteer as v ON v.volunteer_id = p.volunteer_id " +
                "INNER JOIN user as u ON u.id = v.id " +
                "and p.status=0";

        List<ProjectDetail> projectDetail = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<ProjectDetail>(ProjectDetail.class));
        return projectDetail;
    }



    // VOlunteer
    public long addProposedProjects(NewProjectDetail newProjectDetail) {

//        System.out.println(":ID" + newProjectDetail.getProjectId());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO project " +
                "(name, description,start_date, volunteer_id,event_per_year,status,proposed_date) " +
                "values (:name, :description, :start_date, :volunteer_id, :event_per_year,0,curdate())";

        namedParameters.addValue("name", newProjectDetail.getName());
        namedParameters.addValue("description", newProjectDetail.getDescription());
        namedParameters.addValue("start_date", newProjectDetail.getStartDate());
        namedParameters.addValue("volunteer_id", newProjectDetail.getVolunteerId());
        namedParameters.addValue("event_per_year", newProjectDetail.getEventPerYear());

        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }
}
