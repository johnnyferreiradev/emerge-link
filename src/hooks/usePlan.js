import { useState, useEffect } from 'react';

import { getPlan } from 'api/plans';

const usePlan = (planId) => {
  const [plan, setPlan] = useState(null);

  useEffect(
    () => {
      if (planId) {
        getPlan(planId)
          .then((response) => {
            setPlan(response.data);
          })
          .catch(() => {
            setPlan([]);
          });
      }
    },
    [planId],
  );

  return plan;
};

export default usePlan;
