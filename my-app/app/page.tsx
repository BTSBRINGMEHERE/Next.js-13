import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

// 해당 디렉토리의 페이지 이름은 무조건 page로 설정 해당 URL의 메인페이지라 생각하면 됨
const Home = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading the Todos...</p>}>
        <div className="flex space-x-2">
          {/*@ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the Shopping Trolley...</p>}>
        <div className="flex space-x-2">
          {/*@ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
