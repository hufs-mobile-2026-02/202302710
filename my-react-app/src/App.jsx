function UserCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserCard name="박새미" email="parksam0413@hufs.ac.kr" />
    </div>
  );
}