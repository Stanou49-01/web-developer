var WebDeveloper = WebDeveloper || {};

WebDeveloper.Generated = WebDeveloper.Generated || {};

// Initializes the page with data
WebDeveloper.Generated.initialize = function(data, locale)
{
	var anchorDescription = null;
	var anchorInformation = locale.anchorInformation;
	var anchors						= null;
	var anchorsLength			= null;
	var contentDocument		= null;
	var documents					= data.documents;
	var list							= null;
	var url								= null;

	WebDeveloper.Generated.emptyContent();
	WebDeveloper.Generated.localizeHeader(locale);
	WebDeveloper.Generated.setPageTitle(anchorInformation, data, locale);

	// Loop through the documents
	for(var i = 0, l = documents.length; i < l; i++)
	{
		anchorDescription = locale.anchors.toLowerCase();
		contentDocument		= documents[i];
		anchors						= contentDocument.anchors;
		anchorsLength			= anchors.length;
		url								= contentDocument.url;

		// If there is only one anchor
		if(anchorsLength == 1)
		{
			anchorDescription = locale.anchor.toLowerCase();
		}

		WebDeveloper.Generated.addDocument(url, i, anchorDescription, anchorsLength);

		// If there are anchors
		if(anchorsLength > 0)
		{
			list = $("<ol></ol>");

			// Loop through the anchors
			for(var j = 0; j < anchorsLength; j++)
			{
				list.append(ich.anchor({ "anchor": anchors[j], "url": url }));
			}

			$("#content").append(list);
		}

		WebDeveloper.Generated.addSeparator();
	}

	WebDeveloper.Generated.initializeCommonElements();
};