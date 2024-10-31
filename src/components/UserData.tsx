import { useEffect, useState } from 'react';

const manualColorList = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#A533FF', '#33FFF3'];

type User = {
    name: string;
    color: string;
};
export default function UserData() {
    const [users, setUsers] = useState<User[] | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsersAndColors = async () => {
            try {
                /*Egy kis idő, hogy a loading state látható legyen */
                await new Promise((resolve) => setTimeout(resolve, 2000));

                // Felhasználók lekérése - példaként hogy működjön pokemonokat kérek le
                const userResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
                if (!userResponse.ok) throw new Error('Failed to fetch users');
                const userList = await userResponse.json();
                // console.log('userResponse', userList.results);

                // Színek lekérése
                // const colorResponse = await fetch('https://example.com/api/colors');
                // if (!colorResponse.ok) throw new Error('Failed to fetch colors');
                // const colorList = await colorResponse.json();

                const usersWithColors = userList.results.map((user: User) => ({
                    ...user,
                    color: manualColorList[Math.floor(Math.random() * manualColorList.length)],
                    // color: colorList.results[Math.floor(Math.random() * colorList.results.length)],
                }));
                setUsers(usersWithColors);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('Unexpected error', error);
                }
            } finally {
                setLoading(false);
                console.log('Lekérés befejeződött');
            }
        };

        fetchUsersAndColors();
    }, []);

    return (
        <div className='top-container'>
            <div className='limit-width'>
                <h1 className='hero-title '>Felhasználók listája</h1>
                <ul className='user-list'>
                    {loading
                        ? Array.from({ length: 100 }, (_, index) => (
                              <li key={index} className='skeli' style={{ width: `${Math.floor(Math.random() * (120 - 60 + 1)) + 40}px` }}></li>
                          ))
                        : users.map((user: User, index: number) => (
                              <li key={index} style={{ background: user.color }}>
                                  {user.name}
                              </li>
                          ))}
                </ul>
            </div>
        </div>
    );
}
