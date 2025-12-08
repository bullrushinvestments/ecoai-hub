import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecification = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setSpecification(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchSpecification();
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div className="text-red-500">{error}</div>;

  const { id, name, description, createdAt } = specification!;

  return (
    <section className={clsx('bg-white p-8 rounded-lg', 'max-w-screen-md mx-auto')}>
      <h1 className="text-xl font-bold mb-4">Business Specification</h1>
      <div className="mb-2">
        <span className="font-semibold">ID:</span> {id}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Name:</span> {name}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Description:</span> {description}
      </div>
      <div>
        <span className="font-semibold">Created At:</span> {createdAt.toDateString()}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecification = async () => {
      try {
        const response = await axios.get('/api/business-specification');
        setSpecification(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchSpecification();
  }, []);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div className="text-red-500">{error}</div>;

  const { id, name, description, createdAt } = specification!;

  return (
    <section className={clsx('bg-white p-8 rounded-lg', 'max-w-screen-md mx-auto')}>
      <h1 className="text-xl font-bold mb-4">Business Specification</h1>
      <div className="mb-2">
        <span className="font-semibold">ID:</span> {id}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Name:</span> {name}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Description:</span> {description}
      </div>
      <div>
        <span className="font-semibold">Created At:</span> {createdAt.toDateString()}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;