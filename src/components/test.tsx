import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface TestFormValues {
  question: string;
  answer: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormValues>();

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Test created successfully');
      reset();
      router.push('/tests'); // Redirect to the list of tests after creation
    } catch (error) {
      console.error(error);
      toast.error('Failed to create test. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Create a New Test</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            placeholder="Enter your question here..."
            {...register('question', { required: 'Question is required' })}
            className={`w-full p-2 border rounded ${errors.question ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
          <input
            type="text"
            id="answer"
            placeholder="Enter the answer here..."
            {...register('answer', { required: 'Answer is required' })}
            className={`w-full p-2 border rounded ${errors.answer ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface TestFormValues {
  question: string;
  answer: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormValues>();

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Test created successfully');
      reset();
      router.push('/tests'); // Redirect to the list of tests after creation
    } catch (error) {
      console.error(error);
      toast.error('Failed to create test. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Create a New Test</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            placeholder="Enter your question here..."
            {...register('question', { required: 'Question is required' })}
            className={`w-full p-2 border rounded ${errors.question ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
          <input
            type="text"
            id="answer"
            placeholder="Enter the answer here..."
            {...register('answer', { required: 'Answer is required' })}
            className={`w-full p-2 border rounded ${errors.answer ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;