import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description: string;
  requirements: Array<{
    name: string;
    value?: string | number;
  }>;
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirement>();

  const onSubmit = (data: IRequirement) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      router.push('/confirmation');
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          {...register("title", { required: true })}
          id="title"
          type="text"
          placeholder="Enter title"
          className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          {...register("description", { required: true })}
          id="description"
          placeholder="Enter description"
          rows={4}
          className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-gray-700 font-bold mb-2">Requirements</label>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="flex items-center mb-2">
            <input
              {...register(`requirements.${i}.name`, { required: true })}
              id={`requirement-${i}`}
              type="text"
              placeholder="Requirement name"
              className={`w-full mr-2 px-3 py-2 border rounded ${errors.requirements?.[i]?.name ? 'border-red-500' : ''}`}
            />
            <input
              {...register(`requirements.${i}.value`)}
              id={`requirement-value-${i}`}
              type="text"
              placeholder="Requirement value"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        ))}
      </div>
      <button type="submit" disabled={loading} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description: string;
  requirements: Array<{
    name: string;
    value?: string | number;
  }>;
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirement>();

  const onSubmit = (data: IRequirement) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      router.push('/confirmation');
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          {...register("title", { required: true })}
          id="title"
          type="text"
          placeholder="Enter title"
          className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          {...register("description", { required: true })}
          id="description"
          placeholder="Enter description"
          rows={4}
          className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-gray-700 font-bold mb-2">Requirements</label>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="flex items-center mb-2">
            <input
              {...register(`requirements.${i}.name`, { required: true })}
              id={`requirement-${i}`}
              type="text"
              placeholder="Requirement name"
              className={`w-full mr-2 px-3 py-2 border rounded ${errors.requirements?.[i]?.name ? 'border-red-500' : ''}`}
            />
            <input
              {...register(`requirements.${i}.value`)}
              id={`requirement-value-${i}`}
              type="text"
              placeholder="Requirement value"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        ))}
      </div>
      <button type="submit" disabled={loading} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;