import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getTeamsRequest } from '../../store/actions';
import Team from '../../components/Teams/Team';
import Loader from '../../components/UI/Loader';

function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state?.teams?.teams);
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!teams?.length)
    setLoading(true);
    dispatch(getTeamsRequest()).finally(() => {
      setLoading(false);
    })
  }, [dispatch]);
  
  return (
    <div>
      <h1>Home</h1>
      { loading ? (
        <Loader />
      ) : (
        <Row>
          { teams && teams.map((team, i) => (
            <Col md={4} key={team.id}>
              <Team
                item={team}
                index={i}
              />
            </Col>
          )) }
        </Row>
      ) }
    </div>
  );
}

export default Home;
