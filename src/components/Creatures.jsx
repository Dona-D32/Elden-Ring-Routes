import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom'; 
import CreaturesService from '../service/CreaturesService';
import './Creatures.css';

const creaturesService = new CreaturesService();

const Creatures = () => {
  const { isError, isLoading, error, data } = useQuery({
    queryKey: ["creatures"],
    queryFn: () => creaturesService.getAllCreatures(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
<<<<<<< HEAD
      <h1 className="horror-text">Elden Ring Creatures</h1>
=======
      <h1 className="horror-text">Elden Ring Creatures</h1> 
>>>>>>> 38eb0b3a14768f6d5f071394258c94b1c953dcf7
      <div className="creatures-container">
        {data && data.map(creature => (
          <Link key={creature.id} to={`/creatures/${creature.id}`}> {/* Utilisez Link pour les liens */}
            <div className="creature-card">
              {/* Contenu de chaque carte ici */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Creatures;
