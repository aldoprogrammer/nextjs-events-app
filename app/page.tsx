
import {featuredEvents} from '@/providers/EventRepository';

import EventList from '@/components/events/EventList'

export default function Home() {
  const events = featuredEvents();
  return <EventList items={events}/>;
}
