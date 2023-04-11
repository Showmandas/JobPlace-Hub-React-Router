import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="card w-100 p-4 mt-5 mb-5">
            <h2 className='text-center'>Blog page</h2>
            <hr />
            <div className="d-flex flex-column gap-3">
                <h2>When should we use context API?</h2>
                <p>Ans: Context API uses when we can't share data easily between components.When we have logic or cause to access multiple components but dowsn't interact ,then we can be write own context. </p>
                <h2>What is custom hooks?</h2>
                <p>Ans: Custom hooks is a reusable function which is add unique functionality to the react apps.We can add feature through this.</p>
                <h2>What is useRef and it's uses?</h2>
                <p>Ans:useRef hook which returns an object.And It doesn't re-render the components.</p>
                <p>It used to refer DOM elements and store a changeable value that doesn't re-render components when the components are updated. </p>
                <h2>What is useMemo hook?</h2>
                <p>Ans: useMemo is a hook which returns memorized value.It runs only one of it's dependencies update.It's cache the result of calculation between re-render components.</p>
            </div>
            
            </div>
            
        </div>
    );
};

export default Blog;