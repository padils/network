import React, { Suspense } from 'react';


export const WithSuspense = (Component) => {


    return <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>


}

