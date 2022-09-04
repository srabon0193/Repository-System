import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "S1",
      name: "SOET",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 20,
    },
    {
      id: "S2",
      name: "SOMC",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 15,
    },
    {
      id: "S3",
      name: "SOBAS",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 22,
    },
    {
      id: "S4",
      name: "SOBE",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 17,
    },
    {
      id: "S5",
      name: "SOLACS",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 25,
    },
    {
      id: "S6",
      name: "SOLB",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 16,
    },
    {
      id: "S7",
      name: "SOSA",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 5,
    },
    {
      id: "S8",
      name: "SOMS",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 10,
    },
    {
      id: "S9",
      name: "SOLJ",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 3,
    },
    {
      id: "S10",
      name: "SOE",
      image:
        "https://studentcorner.epsiindia.org/upload/college/ADAMAS_University_logo.png",
      publications: 5,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;