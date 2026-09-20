import React, { useState } from 'react';
import { 
  Shield, LayoutDashboard, Layers, Video, BookOpen, Settings,
  Plus, Edit3, Trash2, Check, X, Download, Upload,
  RotateCcw, ExternalLink, ArrowRight, Eye
} from 'lucide-react';
import { useContentData } from '../hooks/useContentData';
import { contentService } from '../services/contentService';
import { Week, Topic, Resource, AccentColor } from '../types/content';
import { Link } from 'react-router-dom';

type AdminTab = 'overview' | 'weeks' | 'topics' | 'videos' | 'resources' | 'settings';

export const AdminPage: React.FC = () => {
  const { weeks, stats, refreshContent } = useContentData();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Modals state
  const [isWeekModalOpen, setIsWeekModalOpen] = useState(false);
  const [editingWeek, setEditingWeek] = useState<Week | null>(null);

  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
  const [editingTopic, setEditingTopic] = useState<{ topic: Topic; weekId: string } | null>(null);

  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);

  // Week form state
  const [weekForm, setWeekForm] = useState({
    number: 1,
    title: '',
    tagline: '',
    description: '',
    icon: 'Terminal',
    accentColor: 'cyan' as AccentColor,
  });

  // Topic form state
  const [topicForm, setTopicForm] = useState({
    weekId: '',
    title: '',
    description: '',
    order: 1,
    videoTitle: '',
    youtubeUrl: '',
    videoDate: '',
    videoDuration: '',
    instructor: '',
  });

  // Resource form state
  const [resourceForm, setResourceForm] = useState({
    topicId: '',
    title: '',
    description: '',
    source: 'MDN Web Docs',
    url: '',
    readingTime: '8 min read',
  });

  const showStatus = (text: string, type: 'success' | 'error' = 'success') => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage(null), 3500);
  };

  // -------------------------------------------------------------
  // WEEK HANDLERS
  // -------------------------------------------------------------
  const handleOpenAddWeek = () => {
    setEditingWeek(null);
    setWeekForm({
      number: weeks.length + 1,
      title: '',
      tagline: '',
      description: '',
      icon: 'Terminal',
      accentColor: 'cyan',
    });
    setIsWeekModalOpen(true);
  };

  const handleOpenEditWeek = (week: Week) => {
    setEditingWeek(week);
    setWeekForm({
      number: week.number,
      title: week.title,
      tagline: week.tagline,
      description: week.description,
      icon: week.icon,
      accentColor: week.accentColor,
    });
    setIsWeekModalOpen(true);
  };

  const handleSaveWeek = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weekForm.title.trim()) {
      showStatus('Please provide a biome title.', 'error');
      return;
    }

    if (editingWeek) {
      contentService.updateWeek(editingWeek.id, {
        title: weekForm.title,
        tagline: weekForm.tagline,
        description: weekForm.description,
        number: Number(weekForm.number),
        icon: weekForm.icon,
        accentColor: weekForm.accentColor,
      });
      showStatus(`Biome 0${weekForm.number} updated successfully!`);
    } else {
      contentService.addWeek({
        title: weekForm.title,
        tagline: weekForm.tagline,
        description: weekForm.description,
        number: Number(weekForm.number),
        icon: weekForm.icon,
        accentColor: weekForm.accentColor,
        learningGoals: ['Understand core module principles', 'Build practical code exercises'],
      });
      showStatus(`New Biome 0${weekForm.number} created!`);
    }

    setIsWeekModalOpen(false);
    refreshContent();
  };

  const handleDeleteWeek = (week: Week) => {
    if (confirm(`Are you sure you want to delete Biome 0${week.number}: "${week.title}"?`)) {
      contentService.deleteWeek(week.id);
      showStatus(`Biome deleted.`);
      refreshContent();
    }
  };

  // -------------------------------------------------------------
  // TOPIC HANDLERS
  // -------------------------------------------------------------
  const handleOpenAddTopic = (defaultWeekId?: string) => {
    const selectedWeekId = defaultWeekId || weeks[0]?.id || '';
    const week = weeks.find(w => w.id === selectedWeekId);
    setEditingTopic(null);
    setTopicForm({
      weekId: selectedWeekId,
      title: '',
      description: '',
      order: week ? week.topics.length + 1 : 1,
      videoTitle: '',
      youtubeUrl: '',
      videoDate: 'Sept 2026',
      videoDuration: '45 mins',
      instructor: 'CodersIsland Mentor',
    });
    setIsTopicModalOpen(true);
  };

  const handleOpenEditTopic = (topic: Topic, weekId: string) => {
    setEditingTopic({ topic, weekId });
    setTopicForm({
      weekId,
      title: topic.title,
      description: topic.description,
      order: topic.order,
      videoTitle: topic.video?.title || '',
      youtubeUrl: topic.video?.youtubeUrl || '',
      videoDate: topic.video?.date || 'Sept 2026',
      videoDuration: topic.video?.duration || '45 mins',
      instructor: topic.video?.instructor || 'CodersIsland Mentor',
    });
    setIsTopicModalOpen(true);
  };

  const handleSaveTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicForm.title.trim()) {
      showStatus('Please provide a quest title.', 'error');
      return;
    }

    const videoObj = {
      title: topicForm.videoTitle || `${topicForm.title} — Workshop Session`,
      youtubeUrl: topicForm.youtubeUrl,
      date: topicForm.videoDate,
      duration: topicForm.videoDuration,
      instructor: topicForm.instructor,
    };

    if (editingTopic) {
      contentService.updateTopic(editingTopic.topic.id, {
        title: topicForm.title,
        description: topicForm.description,
        order: Number(topicForm.order),
        video: videoObj,
      });
      showStatus(`Quest "${topicForm.title}" updated.`);
    } else {
      contentService.addTopic(topicForm.weekId, {
        weekId: topicForm.weekId,
        title: topicForm.title,
        description: topicForm.description,
        order: Number(topicForm.order),
        video: videoObj,
        resources: [],
      });
      showStatus(`New quest "${topicForm.title}" added to biome.`);
    }

    setIsTopicModalOpen(false);
    refreshContent();
  };

  const handleDeleteTopic = (topic: Topic) => {
    if (confirm(`Delete quest "${topic.title}"?`)) {
      contentService.deleteTopic(topic.id);
      showStatus('Quest removed.');
      refreshContent();
    }
  };

  // -------------------------------------------------------------
  // RESOURCE HANDLERS
  // -------------------------------------------------------------
  const handleOpenAddResource = (defaultTopicId?: string) => {
    const firstTopic = weeks[0]?.topics[0];
    const targetTopicId = defaultTopicId || firstTopic?.id || '';
    setResourceForm({
      topicId: targetTopicId,
      title: '',
      description: '',
      source: 'MDN Web Docs',
      url: '',
      readingTime: '8 min read',
    });
    setIsResourceModalOpen(true);
  };

  const handleSaveResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resourceForm.title.trim() || !resourceForm.url.trim()) {
      showStatus('Please fill in title and URL.', 'error');
      return;
    }

    contentService.addResource(resourceForm.topicId, {
      title: resourceForm.title,
      description: resourceForm.description,
      source: resourceForm.source,
      url: resourceForm.url,
      readingTime: resourceForm.readingTime,
      type: 'article',
    });

    showStatus(`Scroll "${resourceForm.title}" attached.`);
    setIsResourceModalOpen(false);
    refreshContent();
  };

  const handleDeleteResource = (topicId: string, resourceId: string) => {
    if (confirm('Delete this scroll?')) {
      contentService.deleteResource(topicId, resourceId);
      showStatus('Scroll removed.');
      refreshContent();
    }
  };

  // -------------------------------------------------------------
  // SETTINGS: BACKUP & RESTORE
  // -------------------------------------------------------------
  const handleResetToDefault = () => {
    if (confirm('Reset entire curriculum data to initial factory biomes and quests (5 weeks, 20 topics)?')) {
      contentService.resetToDefault();
      showStatus('Platform restored to default factory biomes.');
      refreshContent();
    }
  };

  const handleExportData = () => {
    const jsonStr = contentService.exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `coderscraft_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showStatus('Curriculum exported to JSON file.');
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      const success = contentService.importData(content);
      if (success) {
        showStatus('Curriculum imported successfully!');
        refreshContent();
      } else {
        showStatus('Invalid JSON format.', 'error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="relative pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Admin Notice Banner */}
      <div className="mb-6 p-3.5 mc-card bg-[#1b1a25] border-2 border-[#ff2200] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 bg-[#ff2200] border border-black animate-pulse" />
          <span className="font-silkscreen text-white">
            <strong className="text-[#fdb813]">[CMD BLOCK] Prototype Admin:</strong> Content is stored locally on this machine via <code className="bg-black px-1.5 py-0.5 text-[#55ff55]">localStorage</code> and updates player view instantly.
          </span>
        </div>
        <Link
          to="/learn"
          className="mc-btn mc-btn-green px-3 py-1 text-[11px] text-white whitespace-nowrap"
        >
          <Eye className="w-3 h-3 inline mr-1" />
          <span>Player View</span>
        </Link>
      </div>

      {/* Status Toast Message */}
      {statusMessage && (
        <div
          className={`mb-6 p-3 mc-card text-xs font-silkscreen flex items-center justify-between animate-in fade-in ${
            statusMessage.type === 'error'
              ? 'border-[#ff2200] text-[#ff5533] bg-[#2a1010]'
              : 'border-[#55ff55] text-[#55ff55] bg-[#102a10]'
          }`}
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>{statusMessage.text}</span>
          </div>
          <button onClick={() => setStatusMessage(null)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="font-pixel text-[9px] text-[#fdb813] mc-gold-text mb-1">
            <span>COMMAND BLOCK OPERATOR TERMINAL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-pixel text-white mc-text-shadow">
            Admin Console
          </h1>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleOpenAddTopic()}
            className="mc-btn mc-btn-green px-4 py-2.5 text-xs text-white flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Quest</span>
          </button>
          <button
            onClick={handleOpenAddWeek}
            className="mc-btn mc-btn-diamond px-4 py-2.5 text-xs text-white flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Biome</span>
          </button>
        </div>
      </div>

      {/* Main Admin Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Tabs */}
        <aside className="lg:col-span-3 space-y-1.5">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-2.5 p-3 mc-btn text-xs ${
              activeTab === 'overview' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Console Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('weeks')}
            className={`w-full flex items-center justify-between p-3 mc-btn text-xs ${
              activeTab === 'weeks' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4" />
              <span>Biomes ({stats.totalWeeks})</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('topics')}
            className={`w-full flex items-center justify-between p-3 mc-btn text-xs ${
              activeTab === 'topics' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Video className="w-4 h-4" />
              <span>Quests ({stats.totalTopics})</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`w-full flex items-center justify-between p-3 mc-btn text-xs ${
              activeTab === 'videos' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Video className="w-4 h-4" />
              <span>Streams ({stats.totalVideos})</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`w-full flex items-center justify-between p-3 mc-btn text-xs ${
              activeTab === 'resources' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4" />
              <span>Scrolls ({stats.totalResources})</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-2.5 p-3 mc-btn text-xs ${
              activeTab === 'settings' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Backup & Reset</span>
          </button>
        </aside>

        {/* Content Tab Panel */}
        <main className="lg:col-span-9 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 mc-card bg-[#1b1a25]">
                  <div className="font-silkscreen text-[10px] text-[#888] uppercase">Total Biomes</div>
                  <div className="font-pixel text-2xl text-[#55ff55] mc-xp-text mt-1">{stats.totalWeeks}</div>
                </div>

                <div className="p-4 mc-card bg-[#1b1a25]">
                  <div className="font-silkscreen text-[10px] text-[#888] uppercase">Total Quests</div>
                  <div className="font-pixel text-2xl text-[#4dedf4] mc-diamond-text mt-1">{stats.totalTopics}</div>
                </div>

                <div className="p-4 mc-card bg-[#1b1a25]">
                  <div className="font-silkscreen text-[10px] text-[#888] uppercase">Workshop Streams</div>
                  <div className="font-pixel text-2xl text-[#ff5533] mc-redstone-text mt-1">{stats.totalVideos}</div>
                </div>

                <div className="p-4 mc-card bg-[#1b1a25]">
                  <div className="font-silkscreen text-[10px] text-[#888] uppercase">Enchanted Scrolls</div>
                  <div className="font-pixel text-2xl text-[#fdb813] mc-gold-text mt-1">{stats.totalResources}</div>
                </div>
              </div>

              {/* Overview Table */}
              <div className="p-5 mc-card bg-[#1b1a25] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-pixel text-xs text-white mc-text-shadow">
                    Recent Island Quests
                  </h3>
                  <button
                    onClick={() => setActiveTab('topics')}
                    className="font-silkscreen text-[11px] text-[#55ff55] hover:underline flex items-center gap-1"
                  >
                    <span>View all quests</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-silkscreen text-xs text-[#c0c0c0]">
                    <thead className="bg-black/50 text-[#888] text-[10px] uppercase">
                      <tr>
                        <th className="p-2.5">Quest</th>
                        <th className="p-2.5">Biome</th>
                        <th className="p-2.5">Stream</th>
                        <th className="p-2.5">Scrolls</th>
                        <th className="p-2.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {weeks.flatMap(w => w.topics.map(t => ({ topic: t, week: w }))).slice(0, 8).map(({ topic, week }) => (
                        <tr key={topic.id} className="hover:bg-white/5">
                          <td className="p-2.5 font-bold text-white">
                            <Link to={`/topic/${topic.id}`} className="hover:text-[#55ff55] flex items-center gap-1.5">
                              <span>{topic.title}</span>
                              <ExternalLink className="w-3 h-3 text-[#666]" />
                            </Link>
                          </td>
                          <td className="p-2.5 text-[#888]">
                            Biome 0{week.number}
                          </td>
                          <td className="p-2.5">
                            {topic.video?.youtubeUrl ? (
                              <span className="text-[#ff5533]">🎥 {topic.video.duration}</span>
                            ) : (
                              <span className="text-[#555]">None</span>
                            )}
                          </td>
                          <td className="p-2.5 text-[#4dedf4]">
                            {topic.resources?.length || 0} links
                          </td>
                          <td className="p-2.5 text-right">
                            <button
                              onClick={() => handleOpenEditTopic(topic, week.id)}
                              className="text-[#55ff55] hover:underline"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WEEKS MANAGER */}
          {activeTab === 'weeks' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-pixel text-sm text-white mc-text-shadow">Island Biomes</h3>
                  <p className="font-silkscreen text-xs text-[#888]">Edit or add new island biomes.</p>
                </div>
                <button
                  onClick={handleOpenAddWeek}
                  className="mc-btn mc-btn-green px-3 py-1.5 text-xs text-white flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Biome</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {weeks.map(week => (
                  <div
                    key={week.id}
                    className="p-4 mc-card bg-[#1b1a25] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-silkscreen text-xs">
                        <span className="font-pixel text-[8px] px-2 py-0.5 bg-black text-[#55ff55] border border-[#55ff55]">
                          BIOME 0{week.number}
                        </span>
                        <span className="text-[#888]">{week.topics.length} Quests</span>
                      </div>
                      <h4 className="font-pixel text-xs text-white mc-text-shadow">{week.title}</h4>
                      <p className="text-xs text-[#888] line-clamp-1 font-sans">{week.description}</p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <Link
                        to={`/week/${week.id}`}
                        className="mc-btn p-2 text-white text-xs"
                        title="View Biome"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleOpenEditWeek(week)}
                        className="mc-btn p-2 text-[#4dedf4] text-xs"
                        title="Edit Biome"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteWeek(week)}
                        className="mc-btn p-2 text-[#ff2200] text-xs"
                        title="Delete Biome"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TOPICS MANAGER */}
          {activeTab === 'topics' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-pixel text-sm text-white mc-text-shadow">Workshop Quests</h3>
                  <p className="font-silkscreen text-xs text-[#888]">Manage quests across all biomes.</p>
                </div>
                <button
                  onClick={() => handleOpenAddTopic()}
                  className="mc-btn mc-btn-green px-3 py-1.5 text-xs text-white flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Quest</span>
                </button>
              </div>

              {weeks.map(week => (
                <div key={week.id} className="p-4 mc-card bg-[#1b1a25] space-y-3">
                  <div className="flex items-center justify-between border-b-2 border-black/40 pb-2">
                    <span className="font-pixel text-xs text-[#55ff55]">
                      Biome 0{week.number}: {week.title}
                    </span>
                    <button
                      onClick={() => handleOpenAddTopic(week.id)}
                      className="font-silkscreen text-[11px] text-[#fdb813] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Quest</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {week.topics.map(topic => (
                      <div
                        key={topic.id}
                        className="p-3 mc-slot flex items-center justify-between gap-3 text-xs font-silkscreen"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-6 h-6 bg-black text-[#fdb813] font-pixel text-[10px] flex items-center justify-center border border-[#555] shrink-0">
                            0{topic.order}
                          </span>
                          <div className="min-w-0">
                            <div className="font-bold text-white truncate">{topic.title}</div>
                            <div className="text-[10px] text-[#888] truncate">
                              {topic.video?.youtubeUrl ? `🎥 ${topic.video.duration}` : 'No Stream'} • {topic.resources?.length || 0} Scrolls
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <Link
                            to={`/topic/${topic.id}`}
                            className="mc-btn p-1.5 text-white"
                            title="View Quest"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => handleOpenEditTopic(topic, week.id)}
                            className="mc-btn p-1.5 text-[#4dedf4]"
                            title="Edit Quest"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteTopic(topic)}
                            className="mc-btn p-1.5 text-[#ff2200]"
                            title="Delete Quest"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: VIDEOS MANAGER */}
          {activeTab === 'videos' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-pixel text-sm text-white mc-text-shadow">Workshop Streams</h3>
                <p className="font-silkscreen text-xs text-[#888]">Update YouTube stream URLs for every quest.</p>
              </div>

              <div className="space-y-2.5">
                {weeks.flatMap(w => w.topics.map(t => ({ topic: t, week: w }))).map(({ topic, week }) => (
                  <div
                    key={topic.id}
                    className="p-4 mc-card bg-[#1b1a25] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-silkscreen"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="text-[#ff5533]">
                        Biome 0{week.number} • Quest 0{topic.order}
                      </div>
                      <div className="font-bold text-white text-sm">{topic.title}</div>
                      <div className="text-[#888] truncate text-[11px]">
                        {topic.video?.youtubeUrl ? (
                          <span className="text-[#55ff55]">{topic.video.youtubeUrl}</span>
                        ) : (
                          <span className="text-[#ff2200]">No URL set</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenEditTopic(topic, week.id)}
                      className="mc-btn mc-btn-green px-3 py-1.5 text-xs text-white shrink-0"
                    >
                      Update Stream URL
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: RESOURCES MANAGER */}
          {activeTab === 'resources' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-pixel text-sm text-white mc-text-shadow">Enchanted Scrolls</h3>
                  <p className="font-silkscreen text-xs text-[#888]">Attach external documentation and guides to quests.</p>
                </div>
                <button
                  onClick={() => handleOpenAddResource()}
                  className="mc-btn mc-btn-diamond px-3 py-1.5 text-xs text-white flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Scroll</span>
                </button>
              </div>

              <div className="space-y-4">
                {weeks.flatMap(w => w.topics.map(t => ({ topic: t, week: w }))).map(({ topic, week }) => (
                  <div key={topic.id} className="p-4 mc-card bg-[#1b1a25] space-y-2.5">
                    <div className="flex items-center justify-between border-b-2 border-black/40 pb-2">
                      <span className="font-pixel text-xs text-white">
                        {topic.title} <span className="text-[#888] font-silkscreen">(Biome 0{week.number})</span>
                      </span>
                      <button
                        onClick={() => handleOpenAddResource(topic.id)}
                        className="font-silkscreen text-[11px] text-[#55ff55] hover:underline flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Scroll</span>
                      </button>
                    </div>

                    {topic.resources && topic.resources.length > 0 ? (
                      <div className="space-y-2">
                        {topic.resources.map(res => (
                          <div
                            key={res.id}
                            className="p-2.5 mc-slot flex items-center justify-between gap-3 text-xs font-silkscreen"
                          >
                            <div className="min-w-0">
                              <div className="font-bold text-white truncate">{res.title}</div>
                              <div className="text-[10px] text-[#888]">
                                {res.source} • {res.readingTime}
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <a
                                href={res.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mc-btn p-1.5 text-white"
                                title="Open Link"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                              <button
                                onClick={() => handleDeleteResource(topic.id, res.id)}
                                className="mc-btn p-1.5 text-[#ff2200]"
                                title="Delete Scroll"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-[#666] font-silkscreen italic">No scrolls attached to this quest.</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS & BACKUP */}
          {activeTab === 'settings' && (
            <div className="space-y-5">
              <div>
                <h3 className="font-pixel text-sm text-white mc-text-shadow">Backup & Factory Reset</h3>
                <p className="font-silkscreen text-xs text-[#888]">Download JSON backup or restore official Minecraft curriculum.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 mc-card bg-[#1b1a25] space-y-3">
                  <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#55ff55]">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="font-pixel text-xs text-white mc-text-shadow">Export Curriculum JSON</h4>
                  <p className="text-xs text-[#888] font-sans leading-relaxed">
                    Download full curriculum backup file with all 5 biomes and 20 quests.
                  </p>
                  <button
                    onClick={handleExportData}
                    className="w-full mc-btn mc-btn-green py-2.5 text-xs text-white"
                  >
                    Download JSON
                  </button>
                </div>

                <div className="p-5 mc-card bg-[#1b1a25] space-y-3">
                  <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#4dedf4]">
                    <Upload className="w-5 h-5" />
                  </div>
                  <h4 className="font-pixel text-xs text-white mc-text-shadow">Import Curriculum JSON</h4>
                  <p className="text-xs text-[#888] font-sans leading-relaxed">
                    Upload a JSON curriculum backup file to update the quests on this machine.
                  </p>
                  <label className="w-full block mc-btn mc-btn-diamond py-2.5 text-center text-xs text-white cursor-pointer">
                    <span>Upload JSON File</span>
                    <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
                  </label>
                </div>

                <div className="sm:col-span-2 p-5 mc-card bg-[#201010] border-2 border-[#ff2200] space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#ff2200]">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-pixel text-xs text-white mc-text-shadow">Reset to Factory Biomes</h4>
                      <p className="text-xs text-[#888] font-sans">
                        Restore all original 5 biomes, 20 workshop streams, and scrolls anytime.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleResetToDefault}
                    className="mc-btn px-6 py-2 text-xs text-[#ff5533] border-[#ff2200]"
                  >
                    Reset Everything to Default
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: ADD / EDIT BIOME */}
      {isWeekModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg mc-card bg-[#1b1a25] border-4 border-[#3f3e4d] shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b-2 border-black">
              <h3 className="font-pixel text-xs text-white mc-text-shadow">
                {editingWeek ? `Edit Biome 0${editingWeek.number}` : 'Add New Biome'}
              </h3>
              <button onClick={() => setIsWeekModalOpen(false)} className="text-[#888] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveWeek} className="p-4 space-y-3 font-silkscreen text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#888] mb-1">Biome Number</label>
                  <input
                    type="number"
                    value={weekForm.number}
                    onChange={e => setWeekForm({ ...weekForm, number: parseInt(e.target.value) || 1 })}
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#888] mb-1">Biome Theme</label>
                  <select
                    value={weekForm.accentColor}
                    onChange={e => setWeekForm({ ...weekForm, accentColor: e.target.value as AccentColor })}
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  >
                    <option value="cyan">Diamond Cyan</option>
                    <option value="purple">Nether Purple</option>
                    <option value="emerald">Emerald Green</option>
                    <option value="blue">Lapis Blue</option>
                    <option value="amber">Gold Amber</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#888] mb-1">Biome Title</label>
                <input
                  type="text"
                  value={weekForm.title}
                  onChange={e => setWeekForm({ ...weekForm, title: e.target.value })}
                  placeholder="e.g. Redstone Engineering"
                  className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[#888] mb-1">Description</label>
                <textarea
                  value={weekForm.description}
                  onChange={e => setWeekForm({ ...weekForm, description: e.target.value })}
                  rows={3}
                  className="w-full p-2 bg-black border-2 border-[#555] text-white font-sans"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t-2 border-black">
                <button
                  type="button"
                  onClick={() => setIsWeekModalOpen(false)}
                  className="mc-btn px-4 py-2 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mc-btn mc-btn-green px-5 py-2 text-white"
                >
                  Save Biome
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT TOPIC */}
      {isTopicModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl mc-card bg-[#1b1a25] border-4 border-[#3f3e4d] shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b-2 border-black">
              <h3 className="font-pixel text-xs text-white mc-text-shadow">
                {editingTopic ? `Edit Quest: ${editingTopic.topic.title}` : 'Add Workshop Quest'}
              </h3>
              <button onClick={() => setIsTopicModalOpen(false)} className="text-[#888] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTopic} className="p-4 space-y-3 font-silkscreen text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#888] mb-1">Target Biome</label>
                  <select
                    value={topicForm.weekId}
                    onChange={e => setTopicForm({ ...topicForm, weekId: e.target.value })}
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    disabled={!!editingTopic}
                  >
                    {weeks.map(w => (
                      <option key={w.id} value={w.id}>
                        Biome 0{w.number}: {w.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#888] mb-1">Quest Order #</label>
                  <input
                    type="number"
                    value={topicForm.order}
                    onChange={e => setTopicForm({ ...topicForm, order: parseInt(e.target.value) || 1 })}
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#888] mb-1">Quest Title</label>
                <input
                  type="text"
                  value={topicForm.title}
                  onChange={e => setTopicForm({ ...topicForm, title: e.target.value })}
                  placeholder="e.g. Loops & Iteration"
                  className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[#888] mb-1">Description</label>
                <textarea
                  value={topicForm.description}
                  onChange={e => setTopicForm({ ...topicForm, description: e.target.value })}
                  rows={2}
                  className="w-full p-2 bg-black border-2 border-[#555] text-white font-sans"
                  required
                />
              </div>

              <div className="pt-2 border-t-2 border-black space-y-2">
                <div className="font-pixel text-[10px] text-[#ff5533]">
                  🎥 YouTube Stream Settings
                </div>

                <div>
                  <label className="block text-[#888] mb-1">YouTube URL</label>
                  <input
                    type="text"
                    value={topicForm.youtubeUrl}
                    onChange={e => setTopicForm({ ...topicForm, youtubeUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[#888] mb-1">Duration</label>
                    <input
                      type="text"
                      value={topicForm.videoDuration}
                      onChange={e => setTopicForm({ ...topicForm, videoDuration: e.target.value })}
                      placeholder="45 mins"
                      className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] mb-1">Date</label>
                    <input
                      type="text"
                      value={topicForm.videoDate}
                      onChange={e => setTopicForm({ ...topicForm, videoDate: e.target.value })}
                      placeholder="Sept 2026"
                      className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888] mb-1">Instructor</label>
                    <input
                      type="text"
                      value={topicForm.instructor}
                      onChange={e => setTopicForm({ ...topicForm, instructor: e.target.value })}
                      placeholder="Mentor"
                      className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t-2 border-black">
                <button
                  type="button"
                  onClick={() => setIsTopicModalOpen(false)}
                  className="mc-btn px-4 py-2 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mc-btn mc-btn-green px-5 py-2 text-white"
                >
                  Save Quest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD RESOURCE */}
      {isResourceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg mc-card bg-[#1b1a25] border-4 border-[#3f3e4d] shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b-2 border-black">
              <h3 className="font-pixel text-xs text-white mc-text-shadow">
                Attach Enchanted Scroll
              </h3>
              <button onClick={() => setIsResourceModalOpen(false)} className="text-[#888] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveResource} className="p-4 space-y-3 font-silkscreen text-xs">
              <div>
                <label className="block text-[#888] mb-1">Attach to Quest</label>
                <select
                  value={resourceForm.topicId}
                  onChange={e => setResourceForm({ ...resourceForm, topicId: e.target.value })}
                  className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  required
                >
                  {weeks.flatMap(w => w.topics.map(t => ({ topic: t, week: w }))).map(({ topic, week }) => (
                    <option key={topic.id} value={topic.id}>
                      Biome 0{week.number} - {topic.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#888] mb-1">Scroll Title</label>
                <input
                  type="text"
                  value={resourceForm.title}
                  onChange={e => setResourceForm({ ...resourceForm, title: e.target.value })}
                  placeholder="e.g. MDN JavaScript Guide"
                  className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[#888] mb-1">Short Description</label>
                <textarea
                  value={resourceForm.description}
                  onChange={e => setResourceForm({ ...resourceForm, description: e.target.value })}
                  rows={2}
                  className="w-full p-2 bg-black border-2 border-[#555] text-white font-sans"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#888] mb-1">Source Name</label>
                  <input
                    type="text"
                    value={resourceForm.source}
                    onChange={e => setResourceForm({ ...resourceForm, source: e.target.value })}
                    placeholder="MDN, freeCodeCamp, etc."
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#888] mb-1">Reading Time</label>
                  <input
                    type="text"
                    value={resourceForm.readingTime}
                    onChange={e => setResourceForm({ ...resourceForm, readingTime: e.target.value })}
                    placeholder="8 min read"
                    className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#888] mb-1">External Article URL</label>
                <input
                  type="url"
                  value={resourceForm.url}
                  onChange={e => setResourceForm({ ...resourceForm, url: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-2 bg-black border-2 border-[#555] text-white"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t-2 border-black">
                <button
                  type="button"
                  onClick={() => setIsResourceModalOpen(false)}
                  className="mc-btn px-4 py-2 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="mc-btn mc-btn-green px-5 py-2 text-white"
                >
                  Attach Scroll
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
