import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatient } from "../../store/authThunk";
import styled from "styled-components";

const Patients = () => {
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllPatient());
  }, [dispatch]);

  return (
    <StyledContainer>
      {patients && patients.length > 0 ? (
        patients.map((item) => (
          <StyledCard key={item.id}>
            <p>Name: {item.fullName}</p>
            <p>Number: {item.phoneNumber}</p>
            <p>Email: {item.email}</p>
            <p>Date: {item.date}</p>
          </StyledCard>
        ))
      ) : (
        <NoPatientsMessage>No patients found.</NoPatientsMessage>
      )}
    </StyledContainer>
  );
};

export default Patients;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const StyledCard = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  width: 300px;
  > p {
    margin: 5px 0;
  }
`;

const NoPatientsMessage = styled.p`
  color: red;
`;
