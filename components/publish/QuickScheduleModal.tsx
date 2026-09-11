"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Checkbox from "@/components/ui/Checkbox";
import TextInput from "@/components/ui/TextInput";

const CHANNELS = [
  { id: "linkedin", label: "LinkedIn Creator", checked: true },
  { id: "twitter", label: "Twitter / X Relay", checked: true },
  { id: "substack", label: "Substack Broadcast", checked: false },
  { id: "shorts", label: "Shorts / TikTok", checked: false },
];

export default function QuickScheduleModal() {
  const [open, setOpen] = useState(false);
  const [channels, setChannels] = useState(CHANNELS);
  const [queued, setQueued] = useState(false);

  const toggleChannel = (id: string) =>
    setChannels((cs) => cs.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c)));

  const handleQueue = () => {
    setQueued(true);
    setTimeout(() => {
      setQueued(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        <Icon name="add_circle" size={16} />
        <span>New Direct Schedule</span>
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="New Direct Schedule"
        footer={
          queued ? (
            <span className="font-body-medium text-body-medium text-tertiary flex items-center gap-2">
              <Icon name="check_circle" size={18} /> Pushed to queue
            </span>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleQueue}>Push to Queue</Button>
            </>
          )
        }
      >
        <p className="font-body-sm text-body-sm text-secondary mb-space-md">
          Bypass review agent and immediately inject deliverable to distribution pipes.
        </p>
        <div className="space-y-space-md">
          <div className="space-y-1.5">
            <label className="font-caption-bold text-caption-bold text-on-surface">
              Target Distribution Pipes
            </label>
            <div className="grid grid-cols-2 gap-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => toggleChannel(channel.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-colors ${
                    channel.checked
                      ? "bg-primary-fixed/20 hover:bg-primary-fixed/30"
                      : "bg-surface-container-low hover:bg-surface-container"
                  }`}
                >
                  <Checkbox checked={channel.checked} onChange={() => toggleChannel(channel.id)} />
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    {channel.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="font-caption-bold text-caption-bold text-on-surface">
              Content Copy / Anchor
            </label>
            <textarea
              className="w-full p-3 rounded-lg bg-surface-container-low border-0 text-on-surface font-body-sm text-body-sm focus:ring-2 focus:ring-primary resize-none"
              placeholder="Compose or paste finalized distribution copy..."
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-space-sm">
            <div className="space-y-1">
              <label className="font-caption-bold text-caption-bold text-on-surface">
                Publish Date
              </label>
              <TextInput type="date" defaultValue="2024-10-24" />
            </div>
            <div className="space-y-1">
              <label className="font-caption-bold text-caption-bold text-on-surface">
                Time Slot (EDT)
              </label>
              <TextInput type="time" defaultValue="09:00" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}