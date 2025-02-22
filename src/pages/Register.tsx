import React, { useState, useEffect } from 'react';
import { Sword, Shield, X } from 'lucide-react';

interface FormData {
  teamName: string;
  teamSize: '1' | '2';
  member1Name: string;
  member1Phone: string;
  member2Name: string;
  member2Phone: string;
  collegeName: string;
  otherCollege: string;
  transactionId: string;
  paymentReceipt: File | null;
}

const Register = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    teamSize: '1',
    member1Name: '',
    member1Phone: '',
    member2Name: '',
    member2Phone: '',
    collegeName: 'Geethanjali College of Engineering and Technology',
    otherCollege: '',
    transactionId: '',
    paymentReceipt: null
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        paymentReceipt: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form and show success message
      setFormData({
        teamName: '',
        teamSize: '1',
        member1Name: '',
        member1Phone: '',
        member2Name: '',
        member2Phone: '',
        collegeName: 'Geethanjali College of Engineering and Technology',
        otherCollege: '',
        transactionId: '',
        paymentReceipt: null
      });

      setShowForm(false);
      alert('Registration submitted successfully! We will contact you shortly.');
    } catch (error) {
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-mythological text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606487469852-39fb8c096e36?q=80&w=2000')] bg-cover bg-center opacity-10"
        style={{ filter: 'sepia(100%) hue-rotate(340deg)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-darkBrown/50 to-darkBrown" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Sanskrit Symbol */}
          <div className="text-6xl mb-6 text-saffron war-drums">॥</div>
          
          <h1 className="text-5xl font-bold mb-4 text-saffron animate-glow">
            Take Your Sacred Oath
          </h1>
          
          <h2 className="text-3xl font-bold mb-8 text-gold">
            Join the Sacred Battle
          </h2>
          
          <div className="mb-12 space-y-6 text-gray-300">
            <p className="text-xl">
              "As Krishna guided Arjuna, let wisdom guide your path through this digital battlefield."
            </p>
            <p className="text-lg">
              Prepare yourself for an epic journey through the realms of cybersecurity.
              Test your skills, learn from the masters, and emerge victorious.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <button
              onClick={() => setShowForm(true)}
              className="relative btn-primary group w-full md:w-auto sacred-oath-btn"
            >
              <Sword className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
              <span>Swear Your Sacred Oath</span>
              <Shield className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
              <div className="flame-effect"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-darkBrown/80 backdrop-blur-sm">
          <div className="min-h-screen px-4 text-center">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white rounded-lg shadow-2xl">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-saffron text-darkBrown rounded-full hover:bg-gold transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleSubmit} className="text-darkBrown">
                <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

                <div className="space-y-6">
                  {/* Team Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Team Name *</label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Team Size *</label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>

                  {/* Member 1 Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Member 1 Details</h3>
                    <div>
                      <label className="block text-sm font-medium mb-1">Name *</label>
                      <input
                        type="text"
                        name="member1Name"
                        value={formData.member1Name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="member1Phone"
                        value={formData.member1Phone}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      />
                    </div>
                  </div>

                  {/* Member 2 Details (if team size is 2) */}
                  {formData.teamSize === '2' && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Member 2 Details</h3>
                      <div>
                        <label className="block text-sm font-medium mb-1">Name *</label>
                        <input
                          type="text"
                          name="member2Name"
                          value={formData.member2Name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="member2Phone"
                          value={formData.member2Phone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                        />
                      </div>
                    </div>
                  )}

                  {/* College Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">College Name *</label>
                      <select
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      >
                        <option value="Geethanjali College of Engineering and Technology">
                          Geethanjali College of Engineering and Technology
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formData.collegeName === 'Other' && (
                      <div>
                        <label className="block text-sm font-medium mb-1">Enter College Name *</label>
                        <input
                          type="text"
                          name="otherCollege"
                          value={formData.otherCollege}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                        />
                      </div>
                    )}
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Payment Details</h3>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                      <p className="text-sm mb-2">UPI ID:</p>
                      <p className="font-mono text-sm mb-1">8019618201@axl</p>
                      <p className="font-mono text-sm">8019618201@ybl</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Transaction ID *</label>
                      <input
                        type="text"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Payment Receipt *</label>
                      <input
                        type="file"
                        name="paymentReceipt"
                        onChange={handleFileChange}
                        required
                        accept="image/*,.pdf"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary py-3 rounded-md font-bold ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;