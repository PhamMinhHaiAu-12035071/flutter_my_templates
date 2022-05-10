import 'package:flutter/material.dart';

class LocationTicket extends StatelessWidget {
  const LocationTicket({Key? key, required this.location}) : super(key: key);

  final String location;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Icon(
          Icons.place,
          color: Colors.grey.shade400,
          size: 16,
        ),
        Text(
          location,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(
            color: Colors.grey.shade400,
            fontSize: 13,
          ),
        )
      ],
    );
  }
}
