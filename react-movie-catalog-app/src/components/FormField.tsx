import React from 'react';
import { Field, useField } from 'formik';

export const FormField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="uppercase-label">
        {meta.error && meta.touched ? `${label}: ${meta.error}` : `${label}`}
      </label>
      <Field {...field} {...props} />
    </div>
  );
};
