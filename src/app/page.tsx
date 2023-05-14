import { api } from '@/services/api';

import { Container } from './styles';

export default async function Home() {
  const { data } = await api.get('/api/users/1');

  return (
    <Container>
      <p>Welcome: {data.name.split(' ')[0]}</p>

      <br />

      <p>
        Nome: <strong>{data.name}</strong>
      </p>

      <p>
        E-mail:
        <span> {data.email}</span>
      </p>
    </Container>
  );
}
