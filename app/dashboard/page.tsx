import { 
    LayoutDashboard, 
    BookOpen, 
    Users, 
    MessageSquare, 
    Bell, 
    Calendar, 
    Users2, 
    Settings,
    ChevronRight,
    Download,
    TrendingUp,
    Clock,
    BookMarked
  } from 'lucide-react';
  import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
  
  function App() {
    const activityData = [
      { name: 'Mon', hours: 2 },
      { name: 'Tue', hours: 4 },
      { name: 'Wed', hours: 3 },
      { name: 'Thu', hours: 6 },
      { name: 'Fri', hours: 4 },
      { name: 'Sat', hours: 3 },
      { name: 'Sun', hours: 2 },
    ];
  
    const progressData = [
      { name: '3D Design', progress: 45 },
      { name: 'Development', progress: 75 },
    ];
  
    const newCourses = [
      { title: 'Content Writing', rating: 4.8, type: 'Writing Research', icon: <BookMarked className="text-white" /> },
      { title: 'Usability Testing', rating: 5.0, type: 'UX/UI Design', icon: <TrendingUp className="text-white" /> },
      { title: 'Photography', rating: 4.6, type: 'Art and Design', icon: <Clock className="text-white" /> },
    ];
  
    const dailySchedule = [
      { title: 'Design System', type: 'Lecture - Class', color: 'bg-blue-500' },
      { title: 'Typography', type: 'Theory - Test', color: 'bg-purple-500' },
      { title: 'Color Style', type: 'Practice', color: 'bg-green-500' },
      { title: 'Visual Design', type: 'Lecture - Test', color: 'bg-orange-500' },
    ];
  
    const assignments = [
      { title: 'Methods of data', time: '02 JUL, 10:30 AM', status: 'in-progress', color: 'bg-blue-100 text-blue-600' },
      { title: 'Market Research', time: '15 JUN, 02:45 PM', status: 'completed', color: 'bg-green-100 text-green-600' },
      { title: 'Data Collection', time: '25 May, 11:00 AM', status: 'upcoming', color: 'bg-orange-100 text-orange-600' },
    ];
  
    return (
      <div className="min-h-screen bg-[#f3e6ff] p-8">
        <div className="bg-white rounded-3xl shadow-xl flex overflow-hidden max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="w-64 bg-[#1a1a1a] text-white p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full"></div>
              <span className="font-semibold">Eduplex</span>
            </div>
  
            <nav className="space-y-4">
              <button className="flex items-center gap-3 bg-[#2ecc71] text-white px-4 py-2 rounded-xl w-full transition-all duration-300 hover:bg-[#27ae60]">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </button>
              {[
                { icon: <BookOpen size={20} />, label: 'My Courses' },
                { icon: <Users size={20} />, label: 'My Classes' },
                { icon: <MessageSquare size={20} />, label: 'Messages' },
                { icon: <Bell size={20} />, label: 'Notifications' },
                { icon: <Calendar size={20} />, label: 'Calendar' },
                { icon: <Users2 size={20} />, label: 'Community' },
                { icon: <Settings size={20} />, label: 'Settings' },
              ].map((item, index) => (
                <button 
                  key={index} 
                  className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2 rounded-xl w-full transition-all duration-300 hover:bg-[#2a2a2a]"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
  
            <div className="mt-auto pt-8">
              <div className="bg-[#2a2a2a] rounded-xl p-4 hover:bg-[#333] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Download size={20} />
                  <span>Download our</span>
                </div>
                <span className="text-[#2ecc71]">mobile app</span>
              </div>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="flex-1 p-8 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-semibold">Welcome back Taylor 👋</h1>
                <h2 className="text-gray-500 mt-1">New Courses</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search courses"
                    className="px-4 py-2 pl-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] transition-all duration-300"
                  />
                  <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2ecc71] to-[#27ae60] flex items-center justify-center text-white font-semibold">
                  T
                </div>
              </div>
            </div>
  
            {/* Course Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {newCourses.map((course, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2ecc71] flex items-center justify-center">
                      {course.icon}
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.type}</p>
                </div>
              ))}
            </div>
  
            <div className="grid grid-cols-2 gap-8">
              {/* Hours Activity */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Hours Activity</h3>
                  <select className="bg-transparent border border-gray-200 rounded-lg px-2 py-1 text-sm">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activityData}>
                      <defs>
                        <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#2ecc71" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="hours" stroke="#2ecc71" fillOpacity={1} fill="url(#colorHours)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
  
              {/* Daily Schedule */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Daily Schedule</h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300">&lt;</button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300">&gt;</button>
                  </div>
                </div>
                <div className="space-y-3">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                      <ChevronRight className="ml-auto text-gray-400" size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Course Progress */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4">Course Progress</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="progress" fill="#2ecc71" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
  
            {/* Assignments */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Assignments</h3>
                <button className="text-[#2ecc71] hover:text-[#27ae60] transition-colors duration-300">View All</button>
              </div>
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`px-3 py-1 rounded-full ${assignment.color}`}>
                        {assignment.status}
                      </div>
                      <div>
                        <h4 className="font-medium">{assignment.title}</h4>
                        <p className="text-sm text-gray-500">{assignment.time}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;