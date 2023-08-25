import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CreaturesService from '../service/CreaturesService';

const creaturesService = new CreaturesService();

const CreatureDetails = () => {
  const { id } = useParams();
  const { isError, isLoading, error, data: creature } = useQuery({
    queryKey: ["creature", id],
    queryFn: () => creaturesService.getCreatureById(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1>{creature.name}</h1>
      <div className="creature-details">
        <div className="creature-image">
          <img src={creature.image} alt={creature.name} />
        </div>
        <div className="creature-description">
          <p>{creature.description}</p>
        </div>
        <div className="creature-info">
          <p><strong>Location:</strong> {creature.location}</p>
          <p><strong>Drops:</strong> {creature.drops.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default CreatureDetails;
