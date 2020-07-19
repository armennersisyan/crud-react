import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getProjectsRequest } from '../../store/actions';
import Project from '../../components/Projects/Project';
import Loader from '../../components/UI/Loader';

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) =>  state?.projects?.projects);
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!projects?.length)
    setLoading(true);
    dispatch(getProjectsRequest()).finally(() => {
      setLoading(false);
    })
  }, [dispatch]);
  
  return (
    <div>
      <h1>Projects</h1>
      { loading ? (
        <Loader />
      ) : (
        <Row>
          { projects && projects.map(project => (
            <Col md={4} key={project.id}>
              <Project item={project} />
            </Col>
          )) }
        </Row>
      )}
    </div>
  );
}

export default Projects;
