import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getTeamsRequest } from '../../store/actions';
import Team from '../../components/Teams/Team';

function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) =>  state?.teams?.teams);
  
  useEffect(() => {
    if (!teams?.length)
      dispatch(getTeamsRequest())
  }, [dispatch]);
  
  return (
    <div>
      <h1>Home</h1>
      <Row>
        { teams && teams.map(team => (
          <Col md={4} key={team.id}>
            <Team item={team} />
          </Col>
        )) }
      </Row>
    </div>
  );
}

export default Home;
