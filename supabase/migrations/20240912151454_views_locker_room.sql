create view
  public.viw_locker_distinctrooms as
select distinct
  l.room
from
  locker_lockers l;

create view
  public.viw_locker_lockers as
select
  l.id,
  l.created_at,
  l.room,
  l.locker_number,
  true as taken
from
  locker_lockers l
order by
  l.room,
  l.locker_number;
