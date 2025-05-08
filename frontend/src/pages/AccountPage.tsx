import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Button from '../components/ui/Button';
import { LogOut } from 'lucide-react';

const AccountPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Account</h1>
            <Button
              variant="outline"
              onClick={handleLogout}
              leftIcon={<LogOut size={20} />}
            >
              Sign Out
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
              <div className="space-y-2">
                <p className="font-medium">{user.address?.street}</p>
                <p className="font-medium">
                  {user.address?.city}, {user.address?.state} {user.address?.zipCode}
                </p>
                <p className="font-medium">{user.address?.country}</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
              <div className="space-y-4">
                <Button variant="outline">Update Profile</Button>
                <Button variant="outline">Change Password</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;