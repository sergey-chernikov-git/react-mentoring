import React from 'react';
import { Field, useField } from 'formik';

export const FormField = ({
  name,
  label,
  className,
  type,
  placeholder,
  errors,
  touched,
  ...rest
}: any) => {
// const [field, meta, helpers] = useField(props);
  return (
    <div>
      <label className="uppercase-label">
        {errors[`${name}`] && touched[name] ? `${label}: ${errors[name]}` : `${label}`}
      </label>
      <Field name={name} type={type} placeholder={placeholder} className={className} {...rest} />
    </div>
  );
};
