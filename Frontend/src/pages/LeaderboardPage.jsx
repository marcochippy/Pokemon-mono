import { useState, useEffect } from 'react';
import { getLeaderboardEntry } from '../data';

function LeaderboardPage() {
  //   const leaderboardData = [
  //     {
  //       position: 1,
  //       player: 'Ash',
  //       pokemon: 'Pikachu',
  //       streak: 12,
  //       rival: 'Charizard'
  //     },
  //     {
  //       position: 2,
  //       player: 'Misty',
  //       pokemon: 'Starmie',
  //       streak: 10,
  //       rival: 'Bulbasaur'
  //     },
  //     {
  //       position: 3,
  //       player: 'Brock',
  //       pokemon: 'Onix',
  //       streak: 9,
  //       rival: 'Pidgeotto'
  //     }
  //   ];

  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchLeaderboard = async () => {
    //   try {
    //   const res = await fetch('/leaderboard');
    //   if (!res.ok) throw new Error('Failed to fetch leaderboard');
    //   const data = await res.json();
    //   setLeaderboard(data);
    //   } catch (err) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    getLeaderboardEntry();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <p className="text-gray-700">Loading leaderboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (leaderboard.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-black">
        <h1 className="text-2xl font-semibold mb-4">Leaderboard</h1>
        <p className="text-gray-700">No entries yet — play some battles to get a top position!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <h1 className="text-2xl font-semibold mb-6 text-center">Leaderboard</h1>
      <div className="">
        <table className="min-w-full bg-white rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 text-left">Position</th>
              <th className="py-2 px-4 text-left">Player</th>
              <th className="py-2 px-4 text-left">Pokemon</th>
              <th className="py-2 px-4 text-left">Streak</th>
              <th className="py-2 px-4 text-left">Rival</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{entry.username}</td>
                <td className="py-2 px-4">{entry.playerPokemon}</td>
                <td className="py-2 px-4">{entry.winningStreak}</td>
                <td className="py-2 px-4">{entry.rivalPokemon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardPage;
