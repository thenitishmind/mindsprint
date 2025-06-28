import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    try {
      setError('');
      setLoading(true);
      await logout();
      router.push('/auth/login');
    } catch (err) {
      setError('Failed to log out');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
      
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      
      <div className="mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold">
            {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
        </div>
        
        <div className="text-center mb-4">
          <h3 className="text-lg font-medium">{currentUser?.displayName || 'User'}</h3>
          <p className="text-gray-600">{currentUser?.email}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Email verified:</span> {currentUser?.emailVerified ? 'Yes' : 'No'}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">User ID:</span> {currentUser?.uid}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Account created:</span> {currentUser?.metadata.creationTime}
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Logging out...' : 'Log Out'}
        </button>
      </div>
    </div>
  );
} 