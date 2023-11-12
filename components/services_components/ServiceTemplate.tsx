import React from 'react';
import { ServiceTemplateProps } from '@/types';
const ServiceTemplate = ({ title, desc }: ServiceTemplateProps ) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      {/* Інша інформація про сервіс, якщо необхідно */}
    </div>
  );
};

export default ServiceTemplate;
