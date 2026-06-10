import { useState } from 'react';
import { Bell, Search, Settings, LogOut, AlertTriangle } from 'lucide-react';

export default function Header({ title, onLogout }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  return (
    <>
      <header
        className="app-header"
        style={{
          height: '60px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          flexShrink: 0,
        }}
      >
        {/* Title */}
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', fontWeight: '700', color: '#15213f' }}>
            {title}
          </h1>
          <div
            style={{
              width: '36px',
              height: '3px',
              backgroundColor: '#e1262b',
              borderRadius: '2px',
              marginTop: '5px',
            }}
          />
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Search */}
          <div
            className="hide-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f4f6f9',
              border: '1px solid #e6e8ec',
              borderRadius: '8px',
              padding: '7px 12px',
              gap: '8px',
            }}
          >
            <Search size={14} style={{ color: '#8a93a3' }} />
            <input
              placeholder="Search..."
              style={{
                border: 'none',
                background: 'none',
                outline: 'none',
                fontSize: '13px',
                width: '160px',
              }}
            />
          </div>

          {/* Bell */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Bell size={18} />
          </button>

          {/* Settings */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Settings size={18} />
          </button>

          {/* Logout Button */}
          <button
            onClick={() => setShowLogoutModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#15213f',
              color: 'white',
              border: 'none',
              padding: '8px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600',
            }}
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '14px',
            width: 'min(340px, 92vw)',
            padding: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            textAlign: 'center',
          }}>
            <div style={{ marginBottom: '16px' }}>
              <AlertTriangle size={48} style={{ color: '#e1262b', margin: '0 auto' }} />
            </div>

            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontFamily: "'Playfair Display', Georgia, serif", color: '#15213f' }}>
              Confirm Logout
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
              Are you sure you want to logout?
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowLogoutModal(false)}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#eef1f7',
                  color: '#15213f',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleLogoutConfirm}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#cc3333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}