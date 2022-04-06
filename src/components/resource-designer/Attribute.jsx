import { useState } from "react";

export const Attribute = ({ attribute, onAttributeChange }) => {
  const { name, type, value, unit } = attribute;

  return (
    <div>
      Nazwa
      <input
        value={name}
        onChange={(e) =>
          onAttributeChange({ ...attribute, name: e.target.value })
        }
      />
      <select
        name="attributeType"
        value={type}
        onChange={(e) =>
          onAttributeChange({ ...attribute, type: e.target.value })
        }
      >
        <option value="numeric">Numeryczny</option>
        <option value="text">Tekstowy</option>
      </select>
      <input
        value={value}
        onChange={(e) =>
          onAttributeChange({ ...attribute, value: e.target.value })
        }
      />
      <input
        value={unit}
        onChange={(e) =>
          onAttributeChange({ ...attribute, unit: e.target.value })
        }
      />
    </div>
  );
};
