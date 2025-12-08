import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { TestFormData } from './types';

interface WriteTestsProps {
  onSubmit: (data: TestFormData) => void;
}

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<TestFormData>({
    mode: 'onBlur',
  });

  const [createTestMutation] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      onSubmit(data.createTest);
      reset();
    },
    onError: (error) => setError(error.message),
    update: (cache, { data }) => {
      if (!data?.createTest) return;
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [data.createTest] },
      });
    },
  });

  const onSubmitForm: SubmitHandler<TestFormData> = (data) => {
    setLoading(true);
    createTestMutation({ variables: { input: data } });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Write Tests</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
            className={`w-full px-3 py-2 border rounded ${formState.errors.title ? 'border-red-500' : ''}`}
            aria-label="Test Title"
            placeholder="Enter test title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-1">
            Description
          </label>
          <textarea
            id="description"
            {...register('description', { required: true })}
            rows={5}
            className={`w-full px-3 py-2 border rounded ${formState.errors.description ? 'border-red-500' : ''}`}
            aria-label="Test Description"
            placeholder="Enter test description"
          />
        </div>
        <button
          type="submit"
          disabled={loading || formState.isSubmitting}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { TestFormData } from './types';

interface WriteTestsProps {
  onSubmit: (data: TestFormData) => void;
}

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<TestFormData>({
    mode: 'onBlur',
  });

  const [createTestMutation] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      onSubmit(data.createTest);
      reset();
    },
    onError: (error) => setError(error.message),
    update: (cache, { data }) => {
      if (!data?.createTest) return;
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [data.createTest] },
      });
    },
  });

  const onSubmitForm: SubmitHandler<TestFormData> = (data) => {
    setLoading(true);
    createTestMutation({ variables: { input: data } });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Write Tests</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
            className={`w-full px-3 py-2 border rounded ${formState.errors.title ? 'border-red-500' : ''}`}
            aria-label="Test Title"
            placeholder="Enter test title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-1">
            Description
          </label>
          <textarea
            id="description"
            {...register('description', { required: true })}
            rows={5}
            className={`w-full px-3 py-2 border rounded ${formState.errors.description ? 'border-red-500' : ''}`}
            aria-label="Test Description"
            placeholder="Enter test description"
          />
        </div>
        <button
          type="submit"
          disabled={loading || formState.isSubmitting}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;