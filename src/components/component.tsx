import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

interface BusinessSpecificationForm {
  name: string;
  description: string;
  features: Array<string>;
  pricingModel: PricingModelType;
}

enum PricingModelType {
  Freemium = 'Freemium',
  Subscription = 'Subscription',
  PayPerUse = 'Pay Per Use'
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecificationForm>();
  const [loading, setLoading] = useState(false);
  const [pricingModelOptions, setPricingModelOptions] = useState<PricingModelType[]>([]);

  useEffect(() => {
    // Fetch pricing model options from API or define them statically
    setPricingModelOptions(Object.values(PricingModelType));
  }, []);

  const onSubmit = async (data: BusinessSpecificationForm) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (error) {
      console.error('Failed to create business specification:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter business name"
          className={clsx('w-full px-3 py-2 border rounded', errors.name && 'border-red-500')}
          {...control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter business description"
          rows={4}
          className={clsx('w-full px-3 py-2 border rounded', errors.description && 'border-red-500')}
          {...control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="features" className="block text-gray-700 font-bold mb-2">Features</label>
        <Controller
          name="features"
          control={control}
          render={({ field }) => (
            <ul {...field} className="list-disc pl-5 w-full">
              {field.value.map((feature, index) => (
                <li key={index}>
                  <input type="text" value={feature} onChange={(e) => {
                    const newFeatures = [...field.value];
                    newFeatures[index] = e.target.value;
                    field.onChange(newFeatures);
                  }} />
                  <button
                    onClick={() => {
                      const newFeatures = [...field.value];
                      newFeatures.splice(index, 1);
                      field.onChange(newFeatures);
                    }}
                    className="ml-2 text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
              <li>
                <input type="text" placeholder="Add feature..." onChange={(e) => {
                  const newFeatures = [...field.value, e.target.value];
                  field.onChange(newFeatures);
                }} />
              </li>
            </ul>
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pricingModel" className="block text-gray-700 font-bold mb-2">Pricing Model</label>
        <select
          id="pricingModel"
          name="pricingModel"
          className={clsx('w-full px-3 py-2 border rounded', errors.pricingModel && 'border-red-500')}
          {...control}
        >
          {pricingModelOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

interface BusinessSpecificationForm {
  name: string;
  description: string;
  features: Array<string>;
  pricingModel: PricingModelType;
}

enum PricingModelType {
  Freemium = 'Freemium',
  Subscription = 'Subscription',
  PayPerUse = 'Pay Per Use'
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecificationForm>();
  const [loading, setLoading] = useState(false);
  const [pricingModelOptions, setPricingModelOptions] = useState<PricingModelType[]>([]);

  useEffect(() => {
    // Fetch pricing model options from API or define them statically
    setPricingModelOptions(Object.values(PricingModelType));
  }, []);

  const onSubmit = async (data: BusinessSpecificationForm) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (error) {
      console.error('Failed to create business specification:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter business name"
          className={clsx('w-full px-3 py-2 border rounded', errors.name && 'border-red-500')}
          {...control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter business description"
          rows={4}
          className={clsx('w-full px-3 py-2 border rounded', errors.description && 'border-red-500')}
          {...control}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="features" className="block text-gray-700 font-bold mb-2">Features</label>
        <Controller
          name="features"
          control={control}
          render={({ field }) => (
            <ul {...field} className="list-disc pl-5 w-full">
              {field.value.map((feature, index) => (
                <li key={index}>
                  <input type="text" value={feature} onChange={(e) => {
                    const newFeatures = [...field.value];
                    newFeatures[index] = e.target.value;
                    field.onChange(newFeatures);
                  }} />
                  <button
                    onClick={() => {
                      const newFeatures = [...field.value];
                      newFeatures.splice(index, 1);
                      field.onChange(newFeatures);
                    }}
                    className="ml-2 text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
              <li>
                <input type="text" placeholder="Add feature..." onChange={(e) => {
                  const newFeatures = [...field.value, e.target.value];
                  field.onChange(newFeatures);
                }} />
              </li>
            </ul>
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pricingModel" className="block text-gray-700 font-bold mb-2">Pricing Model</label>
        <select
          id="pricingModel"
          name="pricingModel"
          className={clsx('w-full px-3 py-2 border rounded', errors.pricingModel && 'border-red-500')}
          {...control}
        >
          {pricingModelOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;