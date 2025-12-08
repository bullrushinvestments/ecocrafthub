import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface RequirementsForm {
  featureRequests: string[];
  technicalRequirements: string[];
  userFeedback: string;
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RequirementsForm>();
  const toast = useToast();

  const onSubmit = (data: RequirementsForm) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log('Gathered requirements:', data);
      toast({
        title: 'Success',
        description: 'Requirements gathered successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      reset();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div className="mb-4">
        <label htmlFor="featureRequests" className="block text-sm font-medium text-gray-700">Feature Requests</label>
        <textarea
          {...register("featureRequests", { required: true })}
          id="featureRequests"
          rows={3}
          placeholder="Enter feature requests..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.featureRequests && <p className="text-red-500">Feature Requests is required</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="technicalRequirements" className="block text-sm font-medium text-gray-700">Technical Requirements</label>
        <textarea
          {...register("technicalRequirements", { required: true })}
          id="technicalRequirements"
          rows={3}
          placeholder="Enter technical requirements..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.technicalRequirements && <p className="text-red-500">Technical Requirements is required</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="userFeedback" className="block text-sm font-medium text-gray-700">User Feedback</label>
        <textarea
          {...register("userFeedback", { required: true })}
          id="userFeedback"
          rows={3}
          placeholder="Enter user feedback..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.userFeedback && <p className="text-red-500">User Feedback is required</p>}
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Gathering...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface RequirementsForm {
  featureRequests: string[];
  technicalRequirements: string[];
  userFeedback: string;
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RequirementsForm>();
  const toast = useToast();

  const onSubmit = (data: RequirementsForm) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log('Gathered requirements:', data);
      toast({
        title: 'Success',
        description: 'Requirements gathered successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      reset();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div className="mb-4">
        <label htmlFor="featureRequests" className="block text-sm font-medium text-gray-700">Feature Requests</label>
        <textarea
          {...register("featureRequests", { required: true })}
          id="featureRequests"
          rows={3}
          placeholder="Enter feature requests..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.featureRequests && <p className="text-red-500">Feature Requests is required</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="technicalRequirements" className="block text-sm font-medium text-gray-700">Technical Requirements</label>
        <textarea
          {...register("technicalRequirements", { required: true })}
          id="technicalRequirements"
          rows={3}
          placeholder="Enter technical requirements..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.technicalRequirements && <p className="text-red-500">Technical Requirements is required</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="userFeedback" className="block text-sm font-medium text-gray-700">User Feedback</label>
        <textarea
          {...register("userFeedback", { required: true })}
          id="userFeedback"
          rows={3}
          placeholder="Enter user feedback..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.userFeedback && <p className="text-red-500">User Feedback is required</p>}
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading ? 'Gathering...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;