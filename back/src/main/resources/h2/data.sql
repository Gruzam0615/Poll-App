INSERT INTO POLL_ENTITY (POLL_INDEX, POLL_CREATED_DATE, POLL_NAME) VALUES
	 (4,NULL,'Test_Poll_001'),
	 (8,'2024-12-29T00:54:14.650025','Vote2'),
	 (9,'2024-12-29T00:54:35.327856300','Vote3'),
	 (10,'2025-01-05T20:03:38.427915500','Web1'),
	 (11,'2025-01-05T20:05:39.395874900','Test3'),
	 (12,'2025-01-05T20:06:23.851647400','Web2'),
	 (13,'2025-01-05T20:10:47.419292600','Vote2'),
	 (14,'2025-01-05T20:25:56.256682800','Web3'),
	 (15,'2025-01-05T20:26:54.124829700','WebPoll_A');

INSERT INTO POLL_CANDIDATE_LIST_ENTITY (POLL_CANDIDATE_LIST_INDEX, POLL_CANDIDATE_NAME, POLL_COUNT, POLL_INDEX) VALUES
	 (1,'CAN1',7,4),
	 (2,'CAN2',4,4),
	 (3,'CAN3',1,4),
	 (4,'CAN1',0,8),
	 (5,'CAN2',0,8),
	 (6,'CAN3',0,8),
	 (7,'CAN1',0,9),
	 (8,'CAN2',1,9),
	 (9,'CAN3',0,9),
	 (10,'CAN1',0,10);
INSERT INTO POLL_CANDIDATE_LIST_ENTITY (POLL_CANDIDATE_LIST_INDEX, POLL_CANDIDATE_NAME, POLL_COUNT, POLL_INDEX) VALUES
	 (11,'CAN2',0,10),
	 (12,'CAN3',0,10),
	 (13,'CAN1',0,11),
	 (14,'CAN2',0,11),
	 (15,'CAN3',0,11),
	 (16,'CAN1',0,12),
	 (17,'CAN2',0,12),
	 (18,'CAN1',0,13),
	 (19,'CAN2',0,13),
	 (20,'c1',0,14);
INSERT INTO POLL_CANDIDATE_LIST_ENTITY (POLL_CANDIDATE_LIST_INDEX, POLL_CANDIDATE_NAME, POLL_COUNT, POLL_INDEX) VALUES
	 (21,'c2',0,14),
	 (22,'c3',0,14),
	 (23,'c4',0,14),
	 (24,'Can1',1,15),
	 (25,'Can2',1,15),
	 (26,'CanA',1,15);
