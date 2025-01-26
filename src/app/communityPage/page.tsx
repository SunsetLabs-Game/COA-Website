"use client";

import React, { useState } from "react";
import NavMenu from "@/components/NavMenu";
import SearchBar from "@/components/SearchBar";
import { Card } from "@/components/ui/card";
import Avatar from "@/components/ui/avatar";
import { Pagination } from "@/components/ui/pagination";

interface Comment {
  id: number;
  avatar: string;
  username: string;
  timestamp: string;
  text: string;
}

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      avatar: "/avatars/user1.png",
      username: "JaneDoe",
      timestamp: "2 hours ago",
      text: "This game is amazing! When is the next update?",
    },
    {
      id: 2,
      avatar: "/avatars/user2.png",
      username: "JohnSmith",
      timestamp: "1 day ago",
      text: "Is there a special event this month? I would love to participate.",
    },
    {
      id: 3,
      avatar: "/avatars/user3.png",
      username: "GamerGirl123",
      timestamp: "3 days ago",
      text: "The graphics of this game are stunning - good job, team!",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;

  // Filter comments by username or text
  const filteredComments = comments.filter(
    (comment) =>
      comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      alert("Please enter a comment.");
      return;
    }
    const newCommentObj: Comment = {
      id: comments.length + 1,
      avatar: "/avatars/default.png",
      username: "NewUser",
      timestamp: "Just now",
      text: newComment,
    };
    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavMenu */}
      <header className="bg-white shadow">
        <NavMenu
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Community", href: "/communityPage" },
          ]}
        />
      </header>

      <main className="container mx-auto p-6">
        {/* SearchBar */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#002333]">
            Community Discussions
          </h1>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={(query) => console.log("Searching for:", query)}
          />
        </div>

        {/* Form to add comments */}
        <div className="mb-6">
          <textarea
            className="w-full p-4 rounded-lg border border-gray-300"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="mt-2 bg-[#002333] text-white py-2 px-4 rounded-lg"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>

        {/* Comments Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-[#002333]">
            Recent Discussions
          </h2>
          <div className="space-y-4">
            {currentComments.map((comment) => (
              <Card key={comment.id} className="p-4 flex items-start gap-4">
                <Avatar className="w-12 h-12" src={comment.avatar} />
                <div>
                  <h3 className="text-sm font-bold text-[#002333]">
                    {comment.username}
                    <span className="text-gray-400 ml-2">
                      {comment.timestamp}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                </div>
              </Card>
            ))}

            {currentComments.length === 0 && (
              <p className="text-gray-500">No comments match your search query.</p>
            )}
          </div>
        </section>

        {/* Pagination */}
        <Pagination
          className="mt-8"
          currentPage={currentPage}
          totalPages={Math.ceil(filteredComments.length / commentsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>
    </div>
  );
}
